import { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useDocumentData } from "react-firebase-hooks/firestore";
import { doc, setDoc } from "firebase/firestore";
import { useContext } from "react";
import { Context } from "../../index";
import nextId from "react-id-generator";

import NavBar from "../nav-bar/nav-bar";
import AppInfo from "../app-info/app-info";
import TaskAddForm from "../task-add-form/task-add-form";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import TaskList from "../task-lists/task-lists";
import Error from "../error/error";

const AppMainPage = () => {
    const [testUserdata, setTestUserdata] = useState([]);
    // const [maxId, setMaxId] = useState(0);
    const [term, setTerm] = useState("");
    const [statusFilter, setStatusFilter] = useState("all");
    const [priorityFilter, setPriorityFilter] = useState("all");

    const { auth, firestore } = useContext(Context);
    const [user] = useAuthState(auth);

    const sendUserData = async (data) => {
        await setDoc(doc(firestore, "users", user.uid), {
            uid: user.uid,
            displayName: user.displayName,
            userphotoURL: user.photoURL,
            tasks: [...data],
        });
    };

    const [userDoc, loading, error] = useDocumentData(
        doc(firestore, "users", user.uid)
    );

    useEffect(() => {
        if (!loading) {
            setTestUserdata(userDoc.tasks);
        }
    }, [testUserdata, userDoc, loading]);

    const totalTasks = testUserdata.length;

    const changePriority = (id, newPriority) => {
        const newData = testUserdata.map((item) => {
            if (item.taskId === id) {
                return { ...item, priority: newPriority };
            }
            return item;
        });
        sendUserData(newData);
        setTestUserdata(newData);
    };

    const changeStatus = (id, newStatus) => {
        const newData = testUserdata.map((item) => {
            if (item.taskId === id) {
                return { ...item, status: newStatus };
            }
            return item;
        });
        sendUserData(newData);
        setTestUserdata(newData);
    };

    const deleteItem = (id) => {
        const newData = testUserdata.filter((item) => item.taskId !== id);
        sendUserData(newData);
        setTestUserdata(newData);
    };

    const addItem = (task, status, priority) => {
        const newId = nextId("task-id-");
        const newItem = {
            taskId: newId,
            task,
            status,
            priority,
        };
        // setMaxId(maxId + 1);
        sendUserData([...testUserdata, newItem]);
        setTestUserdata([...testUserdata, newItem]);
    };

    const searchTask = (items, term) => {
        if (term.length === 0) {
            return items;
        }

        return items.filter((item) => {
            return (
                item.task.toLowerCase().startsWith(term.toLowerCase()) === true
            );
        });
    };

    const onUpdateSearch = (newTerm) => {
        setTerm(newTerm);
    };

    const afterSearchVisible = searchTask(testUserdata, term);

    const filterTasksByStatus = (items, statusFilter) => {
        switch (statusFilter) {
            case "toDo":
                return items.filter((item) => item.status === "toDo");
            case "doing":
                return items.filter((item) => item.status === "doing");
            case "done":
                return items.filter((item) => item.status === "done");
            default:
                return items;
        }
    };

    const afterFilterStatusVisible = filterTasksByStatus(
        afterSearchVisible,
        statusFilter
    );

    const filterTasksByPriority = (items, priorityFilter) => {
        switch (+priorityFilter) {
            case 1:
                return items.filter((item) => item.priority === 1);
            case 2:
                return items.filter((item) => item.priority === 2);
            case 3:
                return items.filter((item) => item.priority === 3);
            default:
                return items;
        }
    };

    const onStatusFilterSelect = (filter) => {
        setStatusFilter(filter);
    };

    const onPriorityFilterSelect = (filter) => {
        setPriorityFilter(filter);
    };

    const visibleData = filterTasksByPriority(
        afterFilterStatusVisible,
        priorityFilter
    );

    return (
        <div className='app my-0 mx-auto max-w-5xl'>
            <NavBar />
            <div className='flex flex-row items-start justify-between'>
                <AppInfo />
                <TaskAddForm onAddItem={addItem} />
            </div>
            <div className="mt-5 h-16 flex flex-row justify-center items-center pl-4 pr-4 rounded-2xl bg-slate-100 shadow-lg text-black bg-primary-light-bg2'">
                <SearchPanel onUpdateSearch={onUpdateSearch} />
            </div>
            <div className='relative flex justify-between'>
                <AppFilter
                    onStatusFilterSelect={onStatusFilterSelect}
                    onPriorityFilterSelect={onPriorityFilterSelect}
                    statusFilter={statusFilter}
                    priorityFilter={priorityFilter}
                />
                {!error ? (
                    <TaskList
                        totalTasks={totalTasks}
                        data={visibleData}
                        onDelete={deleteItem}
                        onChangePriority={changePriority}
                        onChangeStatus={changeStatus}
                    />
                ) : (
                    <Error />
                )}
            </div>
        </div>
    );
};

export default AppMainPage;