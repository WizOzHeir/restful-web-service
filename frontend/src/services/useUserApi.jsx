import { useState, useEffect, useReducer } from "react";

import apiClient from "../utility/http-common";


export const UseUserApi = (requestMethod="", requestConfig={}, requestUrl="") => {	
	const [setup, setSetup] = useState({
		method: requestMethod,
		config: requestConfig,
		url: requestUrl
	});

	const [state, dispatch] = useReducer(dataReducer, {
		isLoading: false,
		isError: false,
		data: []
	});
	
	useEffect(() => {

		let didCancel = false;
		const url = (setup.url ? "/users" + setup.url : "/users");
		
		const fetchData = async() => {
			dispatch({ type: setup.method + '_INIT'});
			try {
				const response = await apiClient(url).request({
					method: setup.method,
					params: setup.config?.params,
					data: setup.config?.data
				});

				if(!didCancel) {
					dispatch({
						type: setup.method + '_SUCCESS',
						payload: response.data
					});
				}
			} catch (error) {
				dispatch({ type: setup.method + '_FAILURE' });
				console.log(error);
			}
		};
		fetchData();
		return () => {
			didCancel = true;
		}
	}, [setup.config, setup.method, setup.url]);
	return [state, setSetup];
};



export const UserApiMethods = {
	GET: 'GET',
	POST: 'POST',
	DELETE: 'DELETE',
	PUT: 'PUT'
}

const dataReducer = (state, action) => {
	switch(true) {
		case /.*_INIT$/.test(action.type):
			return {
				...state,
				isLoading: true,
				isError: false
			};
		case /.*_SUCCESS$/.test(action.type):
			return {
				...state,
				isLoading: false,
				isError: false,
				data: action.payload,
			};
		case /.*_FAILURE$/.test(action.type):
			return {
				...state,
				isLoading: false,
				isError: true
			};
		default:
			throw new Error("[DATA_REDUCER]: Something is wrong");
	}
};