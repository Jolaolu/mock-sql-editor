/* eslint-disable eqeqeq */
import database from './database.json'
export const users = database

export const queries = {
  'select * from users': users,
  "select * from users where title = 'owner'": users.filter(user => user.contactTitle.toLowerCase() == 'owner'),
  "select * from users where country = 'london'": users.filter(user => user.country.toLowerCase() == 'uk')
}
