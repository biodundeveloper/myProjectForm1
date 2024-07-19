
            document.getElementById('form').addEventListener('submit',(e)=>{

                e.preventDefault()

                if(validate()){
                    form.submit()
                }

                function validate() {
                    
                var firstName=document.getElementById("firstName").value
                const lastName=document.getElementById("lastName").value
                const Email=document.getElementById("Email").value

                if(firstName===''){
                    alert('Firstname cannot be blank')
                    return false
                }

                if(lastName===''){
                    alert('lastName  cannot be blank')
                    return false
                }

                
                if(Email===''){
                    alert(' Email  cannot be blank')
                    return false
                }

                alert('You have succesfully submitted your form')
        
                }

            })



