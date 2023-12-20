import React, { Component } from "react";
import { Container } from "react-bootstrap";
import SettingsForm from "../settings-from";

class SettingsPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            editedCity: props.favouriteCity,
            isEditing: false,
        };

        this.timer = null;
    }

    componentDidMount() {
        alert("Initial data fetched");

        this.timer = setTimeout(() => {
            console.log("Additional data fetched");
        }, 1000);
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("Component is updated");

        if (prevProps.favouriteCity !== this.props.favouriteCity) {
            console.log(`Favourite city changed from ${prevProps.favouriteCity} to ${this.props.favouriteCity}`);

            this.setState({ editedCity: this.props.favouriteCity });
        }
    }

    componentWillUnmount() {
        clearTimeout(this.timer);
        console.log("Component is unmounting");
    }

    handleEditClick = () => {
        this.setState({ isEditing: true });
    };

    handleSaveClick = () => {
        const { editedCity } = this.state;
        const { cityChange } = this.props;

        cityChange(editedCity);

        this.setState({ isEditing: false });
    };

    handleInputChange = (e) => {
        this.setState({ editedCity: e.target.value });
    };

    render() {
        const { favouriteCity } = this.props;
        const { editedCity, isEditing } = this.state;

        return (
            <Container>
                <h1 className="mt-5">Settings Page</h1>
                <SettingsForm
                    editedCity={editedCity}
                    isEditing={isEditing}
                    onInputChange={this.handleInputChange}
                    onSaveClick={this.handleSaveClick}
                    onEditClick={this.handleEditClick}
                />
                <p className="mt-3">Current Favourite City: {favouriteCity}</p>
            </Container>
        );
    }
}

export default SettingsPage;
