import { useQuery } from '@apollo/client'
import { useEffect, useState } from 'react'
import { ALL_AUTHORS} from '../defs/queries'

const Authors = (props) => {

  const authors = useQuery(ALL_AUTHORS)


  if (authors.loading) {
    return <div>loading...</div>
  }
  if (!props.show) {
    return null
  }

  return (
    <div>
      <h2>authors</h2>
      <table>
        <tbody>
          <tr>
            <th></th>
            <th>born</th>
            <th>books</th>
          </tr>
          {authors.data.allAuthors.map((a) => (
            <tr key={a.name}>
              <td>{a.name}</td>
              <td>{a.born}</td>
              <td>{a.bookCount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Authors
