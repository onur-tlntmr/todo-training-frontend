import {useState} from "react";
import {useForm} from "react-hook-form";
import CustomButton from "../Button";

function CreateTask({submitAction}) {

    const [showModal, setShowModal] = useState(false);
    const {register, handleSubmit, formState: {errors}} = useForm();

    const insertFormSubmit = data => {
        submitAction(data);
        setShowModal(false);
    }

    return (
        <>
            <div className="flex justify-end">
                <button className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-purple-300
                font-medium rounded-lg text-sm px-5 py-2.5 mb-2" onClick={() => setShowModal(true)}> Create Task
                </button>
            </div>

            {showModal ? (
                <div id="createTaskModal"
                     className="flex items-center justify-center overflow-y-auto overflow-x-hidden fixed  md:inset-0
                     h-modal md:h-full ">
                    <div className="p-4 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md
                    sm:p-6 lg:p-8 w-1/3">
                        <form className="space-y-6" onSubmit={handleSubmit(insertFormSubmit)}>
                            <h5 className="text-xl font-medium text-purple-800 ">Create Task</h5>
                            <div>
                                <label htmlFor="name"
                                       className="block mb-2 text-sm font-medium text-purple-800">Task Name</label>
                                {errors.name && <span className="text-purple-900">Name is required</span>}<br/>
                                <input name="name" id="name"
                                       className="bg-purple-800 border border-purple-900 text-white rounded-lg
                                       focus:ring-purple-900 focus:border-purple-900 block w-full p-2.5"
                                       {...register("name", {required: true, max: 15})}/>
                            </div>

                            <div className="flex justify-end">
                                <CustomButton type="submit" text="Save"
                                              onClick={() => {
                                              }}/> {/* onclick is blank because form submit already handled*/}

                                <CustomButton text="Cancel" onClick={() => setShowModal(false)}/>
                            </div>
                        </form>

                    </div>
                </div>
            ) : null}
        </>
    )
}


export default CreateTask;