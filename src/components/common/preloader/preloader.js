import classes from './preloader.module.scss'

const Preloader = () => (
    <div className={classes.preloader}>
        <div className={classes.spinner}></div>
    </div>
)
export default Preloader