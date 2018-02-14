import React, {Component} from 'react';
import { ToastContainer, toast } from 'react-toastify';


class Subscriptions extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            error: false,
            success: false
        }
    }
    saveSubscripton = (email) => {
        const URL_EMAIL = `http://localhost:3004/subscriptions`;

        fetch(URL_EMAIL, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email})
        })
        .then(res => res.json())
        .then(() => {
            this.setState({
                email: '',
                success: true
            });
            this.notifySuccess();
        });
    }

    clearMessages = () => {
        setTimeout(function() {
            this.setState({
                error: false,
                success: false
            });
        }.bind(this), 3000);
    }

    handleSubmit = (event) => {
        event.preventDefault();

        let email = this.state.email;
        let regex = /\S+@\S+\.\S+/;

        if (regex.test(email)) {
            this.saveSubscripton(email);
        } else {
            this.setState({error: true});
            this.notifyError();
        }

        this.clearMessages();
    }

    onChangeInput = (event) => {
        this.setState({email: event.target.value});
    }

    notifyError = () => toast.error("Check your email."); 

    notifySuccess = () => toast.success("Thanks for subscribe.");

    render() {
        return (
            <div className="subscribe_panel">
                <h3>Subscribe to us</h3>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <input
                            type="text"
                            placeholder="youremail@email.com"
                            value={this.state.email}
                            onChange={this.onChangeInput}
                        />
                        <ToastContainer />
                    </form>
                </div>
                <small>
                    Esse eiusmod laboris anim aute labore aliqua cupidatat nulla fugiat.<br/>
                    anim aute labore aliqua cupidatat nulla fugiat.
                </small>
            </div>
        )
    }
}

export default Subscriptions;