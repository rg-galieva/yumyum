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
                <form onSubmit={this.onSubmit} className={s.form}>
                    <label for="location">
                        Location:
                        <input type="text" name="location"/>
                    </label>
                    <label for="radius-dist">
                        Radius:
                        <select name="radius-dist">
                            <option>1 mile</option>
                            <option>2 miles</option>
                            <option>3 miles</option>
                            <option>4 miles</option>
                            <option>5 miles</option>
                        </select>
                    </label>
                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                        <input className="mdl-textfield__input" type="number" id="persons"/>
                        <label className="mdl-textfield__label" htmlFor="persons">Number of persons</label>
                    </div>
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
                <Button color="primary">button</Button>
            </div>
        )
    }
}

// ResForm.propTypes = {
//     : PropTypes.
// };

export default ResForm;

