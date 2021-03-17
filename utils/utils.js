/* eslint-disable eqeqeq */
import database from './database.json'
export const users = database

export const queries = {
  'select * from users': users,
  "select * from users where title = 'owner'": users.filter(user => user.contactTitle.toLowerCase() == 'owner'),
  "select * from users where country = 'london'": users.filter(user => user.country.toLowerCase() == 'uk')
}

/**
 * Manual pagination
 *
 * @param {number}  limit   the max amount of items in the slice
 * @param {number}  page    the page to retrieve
 * @param {Array}   data    the list of records to be paginated
 *
 * @returns {Array}        a slice of the array containing fewer records
 */

export const paginate = (limit, page, data) => {
  const offset = (page - 1) * limit
  const newLimit = offset + limit
  return data.slice(offset, newLimit)
}
