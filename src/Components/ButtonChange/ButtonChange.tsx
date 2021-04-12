import React from "react";
import Button from '@material-ui/core/Button';

type PropsType = {

    changeValue: () => void
    title: string
    disabled: boolean
    color: "inherit" | "primary" | "secondary" | "default" | undefined
}

export function ButtonChange(props: PropsType) {

    return (

        <Button variant="contained" size="small" color={props.color} onClick={props.changeValue}
                disabled={props.disabled}>{props.title}</Button>
    )
}