const toMs = require('ms');
const fs = require ('fs')
/**
 * Add Revenda user.
 * @param {string} userId 
 * @param {string} expired 
 * @param {object} _premi
 */
const addRevendaUser = (userId, expired, _premi, login) => {
    const obj = { id: userId, login: login, expired: Date.now() + toMs(expired) }
    _premi.push(obj)
    fs.writeFileSync('./datab/usuarios/Revenda.json', JSON.stringify(_premi))
}

/**
 * Get Revenda user index position.
 * @param {string} userId
 * @param {object} _dir 
 * @returns {Number}
 */
const getRevendaPosition = (userId, _dir) => {
    let position = null
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === userId) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
}

/**
 * Get Revenda user expired.
 * @param {string} userId 
 * @param {object} _dir 
 * @returns {Number}
 */
const getRevendaExpired = (userId, _dir) => {
    let position = null
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === userId) {
            position = i
        }
    })
    if (position !== null) {
        return _dir[position].expired
    }
}

/**
 * Check if is user Revenda.
 * @param {string} userId 
 * @param {object} _dir 
 * @returns {boolean}
 */
const checkRevendaUser = (userId, _dir) => {
    let status = false
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === userId) {
            status = true
        }
    })
    return status
}

/**
 * Constantly checking Revenda.
 * @param {object} _dir 
 */
const expiredCheck = (_dir) => {
    setInterval(() => {
        let position = null
        Object.keys(_dir).forEach((i) => {
            if (Date.now() >= _dir[i].expired) {
                position = i
            }
        })
        if (position !== null) {
            console.log(`Revenda user expired: ${_dir[position].id}`)
            _dir.splice(position, 1)
            fs.writeFileSync('./datab/usuarios/Revenda.json', JSON.stringify(_dir))
        }
    }, 1000)
}

/**
 * Get all Revenda user ID.
 * @param {object} _dir 
 * @returns {string[]}
 */
const getAllRevendaUser = (_dir) => {
    const array = []
    Object.keys(_dir).forEach((i) => {
        array.push(_dir[i].id)
    })
    return array
}
/**
 * Check if is user Revenda.
 * @param {string} userId 
 * @param {object} _dir 
 * @returns {boolean}
 */
 const checkOwner = (userId, _dir) => {
    let status = false
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === userId) {
            status = true
        }
    })
    return status
}

module.exports = {
    addRevendaUser,
    getRevendaExpired,
    getRevendaPosition,
    expiredCheck,
    checkRevendaUser,
    getAllRevendaUser,
    checkOwner
}
