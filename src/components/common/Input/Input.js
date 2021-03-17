import classes from './Input.module.scss'

export const Input = ({input, meta}) => {
    return (
        <div className={classes.PlaceholderFiled}>
            <input {...input}
                   type="text"
                   id="login"
                   className={meta.touched && meta.error ? classes.error : ''}/>
            <span>{meta.touched && meta.error ? meta.error : null}</span>
        </div>
    )
}
export const InputPassword = ({meta, input}) => {
    return (
        <div className={classes.PlaceholderFiled}>
            <input {...input}
                   type="password"
                   id="password"
                   className={meta.touched && meta.error ? classes.error : ''}/>
            <span>{meta.touched && meta.error ? meta.error : null}</span>
        </div>
    )
}

// export const InputValidate = (Component) => ({meta, input}) => {
//     return (
//         <div className={classes.PlaceholderFiled}>
//             <Component {...input} type="text" className={meta.touched && meta.error ? classes.error : ''}/>
//             <span>{meta.touched && meta.error ? meta.error : null}</span>
//         </div>
//     )
// }