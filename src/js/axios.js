import axios from 'axios'

axios.defaults.headers.post['Content-type'] = 'application/x-www-form-urlencoded'

// 请求拦截器
axios.interceptors.request.use(config => {
	return config;
}, error => {
	return Promise.reject(error);
})

// 响应拦截器
axios.interceptors.response.use(response => {
	return response;
}, error => {
	return Promise.reject(error);
})

// 封装axios的post请求
export function postRequest (url, params) {
	return new Promise((resolve, reject) => {
		axios.post(url, params)
		.then(response => {
			resolve(response.data);
		})
		.catch((error) => {
			reject(error);
		})
	})
}

// 封装axios的get请求
export function getRequest (url, params) {
	return new Promise((resolve, reject) => {
		axios.get(url, params)
		.then(response => {
			resolve(response.data);
		})
		.catch((error) => {
			reject(error);
		})
	})
}
