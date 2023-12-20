import React from "react";
import { Form, Button } from "react-bootstrap";

const SettingsForm = ({ editedCity, isEditing, onInputChange, onSaveClick, onEditClick }) => {
    return (
        <Form>
            <Form.Group controlId="formFavouriteCity">
                <Form.Label>Favourite City</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter favourite city"
                    value={editedCity}
                    onChange={onInputChange}
                    disabled={!isEditing}
                />
            </Form.Group>

            {isEditing ? (
                <Button variant="primary" onClick={onSaveClick}>
                    Save
                </Button>
            ) : (
                <Button variant="info" onClick={onEditClick}>
                    Edit
                </Button>
            )}
        </Form>
    );
};

export default SettingsForm;
