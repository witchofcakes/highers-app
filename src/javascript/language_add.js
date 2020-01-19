import $ from 'jquery'
import React from "react";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import ExpandMoreRoundedIcon from "@material-ui/core/SvgIcon/SvgIcon";
import MenuItem from "@material-ui/core/MenuItem";

function Level_Select() {
    const [state, setState] = React.useState({
        level: ''
    });

    const handleChange_level = name => event => {
        setState({
            ...state,
            [name]: event.target.value,
        });
    };

    return (

        <FormControl id="course-select-level-form">
            <Select value={state.level}
                    onChange={handleChange_level('level')}
                    displayEmpty id="course-select-level"
                    IconComponent = {ExpandMoreRoundedIcon}
            >
                <MenuItem value="" disabled id="all-cat-select">
                    <p className="course-placeholder">Рівень мови</p>
                </MenuItem>
                <MenuItem value={1} id="all-cat-select">A1 - базовий</MenuItem>
                <MenuItem value={2} id="all-cat-select">A2 - початковий</MenuItem>
                <MenuItem value={3} id="all-cat-select">B1 - середній</MenuItem>
                <MenuItem value={4} id="all-cat-select">B2 - вище середнього</MenuItem>
                <MenuItem value={5} id="all-cat-select">C1 - високий</MenuItem>
                <MenuItem value={6} id="all-cat-select">C2 - носій мови</MenuItem>
            </Select>
        </FormControl>
    );
}

$(document).ready(function() {
    var max_fields = 10; //Maximum allowed input fields
    var wrapper    = $(".wrapper"); //Input fields wrapper
    var add_button = $(".add_fields"); //Add button class or ID
    var x = 1; //Initial input field is set to 1

    //When user click on add input button
    $(add_button).click(function(e){
        e.preventDefault();
        //Check maximum allowed input fields
        if(x < max_fields){
            x++; //input field increment
            //add input field
            $(wrapper).append(
                '<div>' +
                    '<input type="text" name="input_array_name[]" class="create-vac-input-lang-2 bottom-create-apply" placeholder="Мова" aria-label="Місто"/>' +
                    '<select class="form-control">\n' +
                        '  <option>A1 - базовий</option>\n' +
                        '  <option>A2 - початковий</option>\n' +
                        '  <option>B1 - середній</option>\n' +
                    '</select>' +
                    '<a href="javascript:void(0);" class="remove_field">Remove</a>' +
                '</div>');
        }
    });

    //when user click on remove button
    $(wrapper).on("click",".remove_field", function(e){
        e.preventDefault();
        $(this).parent('div').remove(); //remove inout field
        x--; //inout field decrement
    })
});