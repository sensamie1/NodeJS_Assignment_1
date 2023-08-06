const fs = require('fs')

const path = require('path');

// 1. Create directory/folder named: “Students”
const newFolderPath = path.join(__dirname, 'Students')
fs.mkdir(newFolderPath, (err) => {
    if (err) {
        console.log(err)
        return
    }
    console.log('Folder created successfully')
})

// 2. In the Students directory, create a file named user.js
const textFilePath = path.join(__dirname, 'Students', 'user.js')
const content = ''

fs.writeFile(textFilePath, content, (err) => {
    if (err) {
        console.log(err)
        return
    }
    console.log('File written successfully')
})

// 3. Update the Students directory to “Names”
const newFolderPath1 = path.join(__dirname, 'Students')
const newFolder = path.join(__dirname, 'Names')
fs.rename(newFolderPath1, newFolder, (err) => {
    if (err) {
        console.log(err)
        return
    }
    console.log('Folder renamed successfully')
})

// 4. Add your name as content to the file user.js
const textFilePath1 = path.join(__dirname, 'Names', 'user.js')
const contentAppend = 'Name: Ezealor Samuel'
fs.appendFile(textFilePath1, contentAppend, (err) => {
  if (err) {
      console.log(err)
      return
  }
  console.log('Addition to file successful!')
})

// 5. Update the file and add your age, sex, nationality, phone number and any other information about yourself
const textFilePath2 = path.join(__dirname, 'Names', 'user.js')
const contentAppend1 = '\nAge: 29 \nSex: Male \nNationality: Nigeria \nPhone Number: 08134227375 \nHobby: Chess'
fs.appendFile(textFilePath2, contentAppend1, (err) => {
  if (err) {
      console.log(err)
      return
  }
  console.log('Addition to file successful!')
})

// 6. Update the file user.js to {your_name}.js eg daniel_adesoji.js
const textFilePath3 = path.join(__dirname, 'Names', 'user.js')
const newTextFile = path.join(__dirname, 'Names', 'samuel_ezealor.js')
fs.rename(textFilePath3, newTextFile, (err) => {
    if (err) {
        console.log(err)
        return
    }
    console.log('File renamed successfully')
})

// 7. Read the contents from {your_name}.js. User fs.open or fs.readFile
const textFilePath4 = path.join(__dirname, 'Names', 'samuel_ezealor.js')

fs.open(textFilePath4, 'r', (err, fd) =>{
  if (err) {
    console.log(`An error occured while opening the file ${err}.`)
    return
  }

  fs.readFile(fd, 'utf8', (err, data) => {
    if (err) {
      console.log(`An error occured while raeding the file ${err}.`)
      return
    }
    console.log(data)
  })
})

// 8. Delete the file {your_name}.js
const textFilePath5 = path.join(__dirname, 'Names', 'samuel_ezealor.js')
fs.rm(textFilePath5, (err) => {
  if (err) {
    console.log(err)
    return
  }
  console.log('File deleted successfully')
})

// 9. Delete the directory “Names”
const newFolder1 = path.join(__dirname, 'Names')
fs.rmdir(newFolder1, (err) => {
  if (err) {
    console.log(err)
    return
  }
  console.log('Folder deleted successfully')
})
