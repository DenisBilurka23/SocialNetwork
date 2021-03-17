import classes from './Placeholder.module.scss'
const Placeholder = ({meta, input}) => {
    return (
        <div className={classes.PlaceholderFiled}>
            <input {...input} type="placeholder" className={meta.touched && meta.error ? classes.error : '' }/>
            <span>{meta.touched && meta.error ? meta.error : null }</span>
        </div>
    )
}
export default Placeholder