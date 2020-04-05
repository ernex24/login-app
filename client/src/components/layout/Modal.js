import React from 'react';
import ReactDOM from 'react-dom';
import Login from '../auth/Login';
import Register from '../auth/Register';
import { Tabs } from '@yazanaabed/react-tabs';


const styles = {
	fontFamily: "sans-serif",
	textAlign: "center"
  };

const Modal = ({ isShowing, hide }) =>

	isShowing
		? ReactDOM.createPortal(
				<React.Fragment>
					<div className="modal-overlay" />
					<div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
						<div className="modal">
							<div className="modal-header">
								<button
									type="button"
									className="modal-close-button"
									data-dismiss="modal"
									aria-label="Close"
									onClick={hide}
								>
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<div className="modal_body">
								<div className="login_logo">Shoping_Hub</div>
								<div style={styles}>
								<Tabs activeTab={{ id: 'tab1' }}>
									<Tabs.Tab id="tab1" title="Log in">
										<Login isShowing={isShowing} hide={hide} />
									</Tabs.Tab>
									<Tabs.Tab id="tab2" title="Register">
										<Register isShowing={isShowing} hide={hide}/>
									</Tabs.Tab>
								</Tabs>
								</div>
							</div>
						</div>
					</div>
				</React.Fragment>,
				document.body
			)
		: null;

export default Modal;
