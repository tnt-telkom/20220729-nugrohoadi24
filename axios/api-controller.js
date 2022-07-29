export default ({ app, $axios }) => ({
    async getData(url) {
        $axios.onRequest(config => {
            console.log('Request')
        })
        $axios.onError(error => {
            console.log('error')
        })
        $axios.onResponse(response => {
            console.log('Response')
        })

        return $axios.$get(url)
    },
    async postData(url, data) {
        $axios.setHeader("Content-Type", "application/json")
        $axios.onRequest(config => {
            console.log('Request')
        })
        $axios.onError(error => {
            console.log('error')
        })
        $axios.onResponse(response => {
            console.log('Response')
        })
        
        return $axios.$post(url, data)
    },
    async postJson(url, data) {
        $axios.setHeader("Content-Type", "application/json")
        $axios.onRequest(config => {
            console.log('Request')
        })
        $axios.onError(error => {
            console.log('error')
        })
        $axios.onResponse(response => {
            console.log('Response')
        })
        
        return $axios.$post(url, data)
    },
    async postFormData(url, data) {
        $axios.setHeader("Content-Type", "multipart/form-data")
        $axios.onRequest(config => {
            console.log('Request')
        })
        $axios.onError(error => {
            console.log('error')
        })
        $axios.onResponse(response => {
            console.log('Response')
        })
        
        return $axios.$post(url, data)
    },
})