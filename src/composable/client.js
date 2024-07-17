class Client {
  constructor (client) {
    this.client = client
  }

  setClient (client) {
    this.client = client
    return this
  }

  resolveResponse (result) {
    if (!result.data.success) {
      return Promise.reject(result)
    }
    return Promise.resolve(result.data)
  }

  rejectResponse (result) {
    if (!result.response &&
      result.code === 'ERR_NETWORK'
    ) {
      return Promise.reject(result)
    }

    if (!result.response) {
      return Promise.reject(result.response)
    }
    return Promise.reject(result.response.data)
  }

  simulateResponseSuccess () {
    return { success: true, data: {} }
  }

  simulateResponseError () {
    return { success: false, errors: [], data: {} }
  }

  simulateRequestError (time) {
    return new Promise((_resolve, reject) => {
      setTimeout(() => {
        reject(this.simulateResponseError())
      }, time)
    })
  }

  simulateRequest (time) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.simulateResponseSuccess())
      }, time)
    })
  }

  makeIndexParams (queryParams = {}) {
    const params = this.makePageAndLimitParams(queryParams)
    if (queryParams.query) {
      params.query = queryParams.query
    }

    if (queryParams.filter) {
      params.filter = []
      queryParams.filter.forEach(value => {
        params.filter.push(value)
      })
    }

    if (queryParams.sort) {
      params.sort = queryParams.sort
    }

    return { params }
  }

  makePageAndLimitParams (params) {
    if (!params || !params.pagination) {
      return {}
    }
    const { page, rowsPerPage } = params.pagination
    return {
      page,
      limit: rowsPerPage
    }
  }

  getUrlIndex () {
    return this.url
  }

  index (params) {
    return this.client.get(this.getUrlIndex(), this.makeIndexParams(params))
      .then(this.resolveResponse)
      .catch(this.rejectResponse)
  }
}

export default Client
