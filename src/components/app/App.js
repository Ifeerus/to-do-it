import { useState } from "react";

import NavBar from "../nav-bar/nav-bar";
import AppInfo from "../app-info/app-info";
import TaskAddForm from "../task-add-form/task-add-form";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import TaskList from "../task-lists/task-lists";

function App() {
    const [testUserdata, setTestUserdata] = useState([
        { taskId: 1, task: "To create a progect", status: "toDo", priority: 1 },
        { taskId: 2, task: "To go to the gym", status: "doing", priority: 2 },
        { taskId: 3, task: "To do labs", status: "done", priority: 3 },
    ]);
    const [maxId, setMaxId] = useState(4);
    const [term, setTerm] = useState("");
    const [statusFilter, setStatusFilter] = useState("all");
    const [priorityFilter, setPriorityFilter] = useState("all");

    const totalTasks = testUserdata.length;

    const changePriority = (id, newPriority) => {
        const newData = testUserdata.map((item) => {
            if (item.taskId === id) {
                return { ...item, priority: newPriority };
            }
            return item;
        });
        setTestUserdata(newData);
    };

    const changeStatus = (id, newStatus) => {
        // const newData = structuredClone(testUserdata);
        // newData.forEach((item) => {
        //     if (item.taskId == id) {
        //         item.status = newStatus;
        //     }
        // });
        // setTestUserdata(newData);
        const newData = testUserdata.map((item) => {
            if (item.taskId === id) {
                return { ...item, status: newStatus };
            }
            return item;
        });
        setTestUserdata(newData);
    };

    const deleteItem = (id) => {
        setTestUserdata(testUserdata.filter((item) => item.taskId !== id));
    };

    const addItem = (task, status, priority) => {
        const newItem = {
            taskId: maxId,
            task,
            status,
            priority,
        };

        setMaxId(maxId + 1);
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
                <TaskList
                    totalTasks={totalTasks}
                    data={visibleData}
                    onDelete={deleteItem}
                    onChangePriority={changePriority}
                    onChangeStatus={changeStatus}
                />
            </div>
        </div>
    );
}

export default App;
