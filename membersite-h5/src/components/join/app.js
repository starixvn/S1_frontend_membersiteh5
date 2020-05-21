import React, { useState } from "react";
import Inputbox from "./inputbox";
import Dropdown from "./dropdown";
import Checkbox from "./checkbox";
import Joinbtn from "./joinbtn";
import Tips from "./tips";

const colName = ["UserName", "Password", "Email", "Currency"];
const icon = ["icon-member", "icon-key", "icon-email", "icon-coin-dollar"];
let showPsw = false;
let showPopup = false;

function App() {
	// ----- showTips -----
	const [showTipsState, setShowTipsState] = useState({
		UserName: false,
		Password: false,
		Email: false,
		Currency: false
	});

	// -----checklist-----
	const [checklistState, setChecklistState] = useState({
		UserName: false,
		Password: false,
		Email: false,
		Checkbox: false
	});

	// -----warning-----
	const [warningState, setWarningState] = useState({
		UserName: false,
		Password: false,
		Email: false,
		Checkbox: false
	});

	// -----showPsw-----
	const showPswHandler = () => {
		showPsw = !showPsw;
	};

	// -----showTips-----
	const showTipsHandler = (col, e) => {
		e.stopPropagation();

		if (warningState[col] === true) {
			setShowTipsState(prevState => {
				Object.keys(prevState).forEach(_col => {
					prevState[_col] = false;
				});
				return {
					...prevState
				};
			});
		} else {
			setShowTipsState(prevState => {
				Object.keys(prevState).forEach(_col => {
					prevState[_col] = _col === col;
				});
				return {
					...prevState
				};
			});
		}
	};

	// -----checkEvent-----
	const checkUsernameHandler = e => {
		let checked = !e.target.value ? false : true;

		setWarningState(prevState => {
			return { ...prevState, UserName: !checked };
		});
		setChecklistState(prevState => {
			return { ...prevState, UserName: checked };
		});

		setShowTipsState(prevState => {
			return { ...prevState, UserName: false };
		});
	};

	const checkPasswordHandler = e => {
		const val = e.target.value;
		const regx = /^[a-zA-Z0-9@$*!%#?&]*$/;
		if (val != null) {
			if (val.length < 6 || val.length > 18) {
				//failed
				setWarningState(prevState => {
					return { ...prevState, Password: true };
				});
				setChecklistState(prevState => {
					return { ...prevState, Password: false };
				});
				console.log("Invalid Password");
			} else if (!regx.test(val)) {
				//failed
				setWarningState(prevState => {
					return { ...prevState, Password: true };
				});
				setChecklistState(prevState => {
					return { ...prevState, Password: false };
				});
				console.log("Invalid Password");
			} else {
				//success
				setWarningState(prevState => {
					return { ...prevState, Password: false };
				});
				setChecklistState(prevState => {
					return { ...prevState, Password: true };
				});
			}
		}
		setShowTipsState(prevState => {
			return { ...prevState, Password: false };
		});
	};

	const checkEmailHandler = e => {
		const val = e.target.value;
		const regx = /^\w+((-\w+)|(\.\w+))*@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;

		if (val != null) {
			if (!regx.test(val)) {
				//failed
				console.log("Invalid Email");
				setWarningState(prevState => {
					return { ...prevState, Email: true };
				});
				setChecklistState(prevState => {
					return { ...prevState, Email: false };
				});
			} else {
				//success
				setWarningState(prevState => {
					return { ...prevState, Email: false };
				});
				setChecklistState(prevState => {
					return { ...prevState, Email: true };
				});
			}
		}
		setShowTipsState(prevState => {
			return { ...prevState, Email: false };
		});
	};

	// ----- currency-----
	const [currencyState, setcurrencyState] = useState(0);

	const dropdownStateHandler = i => {
		setcurrencyState(i);
		setShowTipsState(prevState => {
			return { ...prevState, Currency: false };
		});
	};

	// -----checkbox-----
	const [checkboxState, setCheckboxState] = useState(false);

	const checkboxHandler = () => {
		let checked = !checkboxState;
		setCheckboxState(checked);
		setChecklistState(prevState => {
			return { ...prevState, Checkbox: checked };
		});
	};

	// -----checkList-----
	const checklistHandler = () => {
		console.log("clicked");
		let checked = true;
		showPopup = true;

		for (let i in checklistState) {
			if (!checklistState[i]) {
				checked = false;
				break;
			}
		}
		if (checked) {
			alert("join successfully");
		}
	};

	// -----closeDropdown-----
	const closeDropdown = e => {
		setShowTipsState(prevState => {
			return { ...prevState, Currency: false };
		});
		// showPopup = false;
	};

	const [showJoinPanel, handlePanel] = useState(false);
	const handleJoinPanel = () => {
		handlePanel(prevState => !prevState);
	};

	// -----render-----
	return (
		<>
			<button onClick={handleJoinPanel}>JOIN</button>
			<div
				className={`Join${showJoinPanel ? " open" : ""}`}
				onClick={closeDropdown}>
				<div
					className={`close${showJoinPanel ? " open" : ""}`}
					onClick={handleJoinPanel}>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
				</div>
				<img src="./img/logo.svg" alt="" />
				<div className="title">JOIN NOW</div>

				<Inputbox
					icon={icon[0]}
					inputType="text"
					placeholder="UserName"
					onFocus={showTipsHandler}
					colName={colName[0]}
					onBlur={checkUsernameHandler}
					warningState={warningState.UserName}
					ClassName="JoinRule"
					showTips={showTipsState.UserName}
					Tips="For security, we suggest that your username does not contain your real name."
					Warning="Invalid UserName"></Inputbox>

				<Inputbox
					icon={icon[1]}
					inputType={`${!showPsw ? "password" : "text"}`}
					placeholder="PassWord"
					onFocus={showTipsHandler}
					colName={colName[1]}
					onBlur={checkPasswordHandler}
					showPsw={showPsw}
					showPswHandler={showPswHandler}
					warningState={warningState.Password}
					ClassName="JoinRule"
					showTips={showTipsState.Password}
					Tips="6-18 alphanumeric (A-Z, a-z, 0-9) characters or special characters @$*!%#?&"
					Warning="Invalid Password"></Inputbox>

				<Inputbox
					icon={icon[2]}
					inputType="text"
					placeholder="Email"
					onFocus={showTipsHandler}
					colName={colName[2]}
					onBlur={checkEmailHandler}
					warningState={warningState.Email}
					ClassName="JoinRule"
					showTips={showTipsState.Email}
					Tips="Email cannot be changed after submission."
					Warning="Invalid Email"></Inputbox>

				<div className="inputBox">
					<Dropdown
						colName={colName[3]}
						selectedIdx={currencyState}
						type={["MYR", "THB", "RMB"]}
						showTipsHandler={showTipsHandler}
						showTips={showTipsState.Currency}
						selectState={dropdownStateHandler}></Dropdown>
					<Tips
						Icon={icon[3]}
						IsOpen={showTipsState.Currency}
						ClassName="JoinRule">
						Preferred currency can not be changed after
						registration.
					</Tips>
				</div>

				<Checkbox checkboxHandler={checkboxHandler}>
					I agree to the{" "}
					<a
						target="_blank"
						href="http://www.n88dev.com/SiteSkin/Nova88/Static/ch/TermsConditions.html">
						Terms and Conditions
					</a>{" "}
					and the
					<a
						target="_blank"
						href="http://www.n88dev.com/SiteSkin/Nova88/Static/ch/RulesandRegulations.html">
						Rules and Regulations
					</a>{" "}
					of Nova88.I acknowledge I am at least 21 year of age.
				</Checkbox>

				<Joinbtn checklistHandler={checklistHandler} />
				{/* <Popup 
      showPopup={showPopup}/> */}
			</div>
		</>
	);
}

export default App;
