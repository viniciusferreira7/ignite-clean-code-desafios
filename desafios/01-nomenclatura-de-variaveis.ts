// Nomenclatura de variáveis

const categoryOfUsers = [
  {
    title: 'User',
    followers: 5
  },
  {
    title: 'Friendly',
    followers: 50,
  },
  {
    title: 'Famous',
    followers: 500,
  },
  {
    title: 'Super Star',
    followers: 1000,
  },
]

export default async function getUserGithub(req, res) {
  const userName = String(req.query.username)

  if (!userName) {
    return res.status(400).json({
      message: `Please provide an username to search on the github API`
    })
  }

  const getUserOfGithub = await fetch(`https://api.github.com/users/${userName}`);

  if (getUserOfGithub.status === 404) {
    return res.status(400).json({
      message: `User with username "${getUserOfGithub}" not found`
    })
  }

  const userData = await getUserOfGithub.json()

  const sortCategoryOfUsers = categoryOfUsers.sort((a, b) => b.followers - a.followers);

  const userFollowersCategory = sortCategoryOfUsers.find(category => userData.followers > category.followers)

  const result = {
    userName,
    category: userFollowersCategory.title
  }

  return result
}

getUserGithub({
  query: {
    username: 'josepholiveira'
  }
}, {})