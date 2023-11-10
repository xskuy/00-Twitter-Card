import './TwitterCard.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'
import { users } from './Users.jsx'

export function App() {
  const format = (userName) => `@${userName}`

  return (
    <section className='App'>
      <h1 className='tw-text'>X</h1>
      <ul className='tw-follow-card-list'>
        {users.map((user) => (
          <li className='tw-follow-card-item' key={user.userName}>
            <TwitterFollowCard
              formatUsarName={format}
              userName={user.userName}
              name={user.name}
              initIsFollow={user.initIsFollow}
            />
          </li>
        ))}
      </ul>
    </section>



  )
}

