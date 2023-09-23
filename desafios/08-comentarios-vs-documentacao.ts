interface User {
  name: string
  email: string
  avatar: string
}

 function register(data: User) {
   const { email, name, avatar } = data

    function getUserByEmail(email:string){
      return email
    }

    function convertImageToJPG(avatar: string){
      return avatar
    }

    function createUser(data: User){
      return data
    }

    if (!avatar) return { error: 'avatar is required' }

    if(!name) return { error: 'name is required' }

    const userMail = getUserByEmail(email)

    if (userMail) {
      return { error: 'email already used' }
    }

    const avatar2 = convertImageToJPG(avatar)

    const user = createUser({ email, name, avatar: avatar2 })

  return { user }
}