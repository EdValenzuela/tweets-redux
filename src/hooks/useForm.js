import { useState } from "react";

export const useForm = (init) => {

    const [formValue, setFormValue] = useState(init);

    const onChange = e =>{
        setFormValue({
            ...formValue,
            [e.target.name] : e.target.value
        })
    }

    return{
        ...formValue,
        formValue,
        onChange
    }
}