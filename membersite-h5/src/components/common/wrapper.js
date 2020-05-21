import React, { useState, useEffect } from "react";
import { i18nContext } from "../context/i18n";
import { userInfoContext } from "../context/userInfo";
import { GetTranslationData } from "../../service/api/site";
import { isLoggedIn } from "../../service/auth";
import { navigate } from "gatsby";

export const Wrapper = ({ children, pageLangKeys, afterLogin }) => {
	const [userInfo, setUserInfo] = useState({
		isLogin: isLoggedIn()
	});
	const [i18n, seti18n] = useState({});
	useEffect(() => {
		let mounted = true;
		GetTranslationData(pageLangKeys).then(
			res => {
				if (mounted) {
					seti18n(() => res.data.data);
				}
			},
			err => {
				alert("error", err.response.status);
			}
		);

		return () => (mounted = false);
	}, []);

	if (
		typeof window !== `undefined` &&
		afterLogin === true &&
		!userInfo?.isLogin
	) {
		navigate("/");
		return null;
	}

	return (
		<i18nContext.Provider value={{ i18n, seti18n }}>
			<userInfoContext.Provider value={{ userInfo, setUserInfo }}>
				{children}
			</userInfoContext.Provider>
		</i18nContext.Provider>
	);
};
