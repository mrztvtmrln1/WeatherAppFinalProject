import React, { Component } from 'react';
import Header from '../header';
import Footer from '../footer';
import {
    FAQ,
    SettingsPage,
    WelcomePage,
    AboutUs,
    Register,
    Login,
    SearchPage,
    WeatherInfoHOC
} from "../pages";

import WeatherApiService from '../../services/weather-api-service';
import { ApiServiceProvider } from '../weather-api-service-context/api-service-context';

import { ErrorIndicator, NotFoundIndicator } from '../errors';
import ErrorBoundary from '../error-boundary/error-boundary';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import './app.css';
import SvgSymbols from "../symbols/symbols";

export default class App extends Component {
    state = {
        favouriteCity: 'Almaty',
        hasError: false,
        isLoggedIn: false,
        apiService: new WeatherApiService(),
    };

    onLogin = () => {
        this.setState({
            isLoggedIn: true,
        });
    };

    onLogout = () => {
        this.setState({
            isLoggedIn: false,
        });
    };

    cityChange = (newCity) => {
        this.setState({
            favouriteCity: newCity,
        });
    };

    componentDidCatch(error, errorInfo) {
        this.setState({ hasError: true });
    }

    render() {
        if (this.state.hasError) {
            return <ErrorIndicator />;
        }

        const { isLoggedIn, apiService, favouriteCity } = this.state;

        return (
            <ErrorBoundary>
                <ApiServiceProvider value={apiService}>
                    <Router>
                        <div>
                            <SvgSymbols />
                            <Header isLoggedIn={isLoggedIn} onLogout={this.onLogout} />
                            <Switch>
                                <Route path="/" render={(props) => <WelcomePage city={favouriteCity} />} exact />
                                <Route path="/aboutus" component={AboutUs} exact />
                                <Route path="/register" component={Register} />
                                <Route path="/login" render={(props) => <Login {...props} onLogin={this.onLogin} />} />
                                <Route path="/faq" component={FAQ} />
                                <Route path="/search" component={SearchPage} />
                                <Route path="/weather/:City?" component={WeatherInfoHOC} />
                                <Route path="/settings" render={(props) => <SettingsPage favouriteCity={favouriteCity} cityChange={this.cityChange} />} exact />
                                <Route component={NotFoundIndicator} />
                            </Switch>
                            <Footer />
                        </div>
                    </Router>
                </ApiServiceProvider>
            </ErrorBoundary>
        );
    }
}
