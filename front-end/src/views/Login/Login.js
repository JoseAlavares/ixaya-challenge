import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { MDBContainer,
	MDBRow,
	MDBCol,
	MDBInput,
	MDBBtn,
	MDBCard,
	MDBCardBody,
	MDBCardFooter
} from "mdbreact";
import "./Login.css";
import { loginService } from '../../services/users.service';
import { loginState } from '../../stores/Login.store';
import { useRecoilState } from 'recoil';

//Components
import ModalMessage from "../../components/ModalMessage/ModalMessage";
import Navbar from "../../components/Navbar/Navbar";

const Login = (props) => {
	const [login, setLogin] = useState({});
	const [_loginState, setLoginState] = useRecoilState(loginState);
	const token = window.sessionStorage.getItem("jwt");

	if(token)
		props.history.push("/home");

	const changeUser = (event) => {
		const value = event.target.value;
		setLogin({ ...login, user: value });
	};

	const changePassword = (event) => {
		const value = event.target.value;
		setLoginState({ ...login, password: value });
	};

	const handleLogin = async (e) => {
		e.preventDefault();
		let errors = [];

		if(!login.user) errors.push(<p key={1} style={{"color": "red"}}>El campo correo no puede estar vacio</p>);
		if(!login.password) errors.push(<p key={2} style={{"color": "red"}}>El campo contraseña no puede estar vacio</p>);
		if(login.password.length <= 4 && login.password) errors.push(<p key={1} style={{"color": "red"}}>La longitud de la contraseña debe ser mayor a 4 caracteres</p>);

		if(errors.length > 0){
			setLoginState({ ..._loginState, errorText: errors, showErrors: true });
			setTimeout(() => {
				setLoginState({ ..._loginState, showErrors: false });
			}, 3500);

			return;
		}
		setLoginState({ loading: true, disableBtn: true });

		const result = await loginService(login.user, login.password);

		if(result.error) {
			setLoginState({
				..._loginState,
				showModal: true,
				modalText: result.message,
				loading: false
			});
			return;
		}

		window.sessionStorage.setItem("jwt", result.token);
		const userData = { user: result.user, name: result.name, id: result._id }
		window.sessionStorage.setItem("user", JSON.stringify(userData));
		props.history.push("/home");
	};

	const show = () =>{
		setLoginState({
			..._loginState,
			showModal: !_loginState.showModal
		});
	};

	const location = props.location.pathname;

	return (
		<Fragment>
			<Navbar
				location={location}/>
			<MDBContainer>
				<MDBRow>
					<MDBCard id="login-form">
						<MDBCardBody>
						<MDBCol md="12" lg="12">
		      				<form>
		        				<p className="h5 text-center mb-4">Sign in</p>
		        				<div className="grey-text">
		          					<MDBInput
									  	value={login.user}
		          						name="user"
		          						onChange={changeUser}
		          						label="Type your email"
		          						icon="envelope"
		          						group type="text"
		          						validate error="wrong"
		            					success="right" />
		          					<MDBInput
									  	value={login.password}
		          						name="password"
		          						onChange={changePassword}
		          						label="Type your password"
		          						icon="lock"
		          						group type="password"
		          						validate />
		        				</div>
		        				<div className="text-center">
		          					<MDBBtn
		          						onClick={handleLogin}
		          						disabled={_loginState.disableBtn}
		          						type={"button"}>
		          						Login
	          						</MDBBtn>
		        				</div>
		      				</form>
						</MDBCol>
					</MDBCardBody>
					<MDBCardFooter>
						<Link to="/register">Registrarse</Link>
						<br/>
						<center>
							{_loginState.loading &&
								<div className="spinner-grow text-success" role="status">
		        					<span className="sr-only">Loading...</span>
		      					</div>
	      					}
      					</center>
      					<div id="errors">
      						{_loginState.showErrors &&
      							_loginState.errorText
      						}
      					</div>
					</MDBCardFooter>
				</MDBCard>
			</MDBRow>
			<ModalMessage
				showModal={_loginState.showModal}
				message={_loginState.modalText}
				show={show}
				/>
		</MDBContainer>
	</Fragment>
	);
};

export default Login;