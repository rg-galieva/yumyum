import React, {PropTypes, Component} from 'react'
import s from './_styles.css'
import Button from 'muicss/lib/react/button';

class ResForm extends Component {

    onSubmit = (ev) => {
        if (ev) ev.preventDefault();
        console.log("---ResForm submitted",);
    }

    render() {
        return (
            <div>
                <Button color="primary">button</Button>

                <form onSubmit={this.onSubmit} className={s.form}>
                    <label htmlFor="location">
                        Location:
                        <input type="text" name="location"/>
                    </label>
                    <label htmlFor="radius">
                        <input type="text" name="radius"/>
                    </label>
                    <label htmlFor="persons">
                        <input type="number" name="persons"/>
                    </label>
                    <label htmlFor="time_start">
                        <input type="text" name="time_start"/>
                    </label>
                    <label htmlFor="time_end">
                        <input type="text" name="time_end"/>
                    </label>
                    <label htmlFor="tags">
                        <input type="text" name="tags"/>
                    </label>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        )
    }
}

// ResForm.propTypes = {
//     : PropTypes.
// };

export default ResForm;

