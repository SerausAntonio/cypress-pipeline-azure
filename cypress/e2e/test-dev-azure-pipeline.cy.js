///<reference types="cypress"/>
describe('test-dev-azure-pipeline',()=>{

    it("Assert status pipeline job",()=>{

        cy.request({
            url: "https://dev.azure.com/cypresstests/cypresstest/_apis/pipelines/5/runs?api-version=7.1-preview.1",
            method: "POST",
             headers: {
                "Content-Type": "application/json",
                "Authorization": "Basic dXNlcjo2WkZHQUEwYTVRWFo5RGNIeDB4aEp0WlNsdzNBRFJubHNzQXdNbTd1MDlITXNnUU1mRldvSlFRSjk5QkdBQ0FBQUFBWUI4NDRBQUFTQVpETzN3THg="
            },
            body:{
                  "resources": {
                      "repositories": {
                         "self": {
                           "refName": "refs/heads/main"
              }
    }
  }
            }
        }).then(response => {
       
            expect(response.status).to.equal(200);
            expect(response.body.state).to.equal("inProgress");
            expect(response.body.resources.repositories.self.repository.fullName).to.eq("SerausAntonio/java-pipeline-azure");
        })


    })

})