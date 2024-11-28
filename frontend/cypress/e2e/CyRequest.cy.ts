describe('Cy.request tests GET and POST', () => {
    it('Testing GET.', () => {
      cy.request({
        method: 'GET',
        url: '/api/magazines', 
      }).then((data) => {
        expect(data.body).to.be.an('array');
        cy.log(data.body)
      });
    });
    it('Testing POST.', () => {
      cy.request({
        method: 'POST',
        url: '/api/magazines/post',
        body: {
          title: 'Venom War (2024) #5',
          description: 'WHO IS THE LAST VENOM STANDING? There is just one battle remaining in the war for control of the Venom symbiote…and the victory leaves both host and symbiote forever changed! The time is nigh to end the war, decimate all the forces arrayed against them, and set the stage for an all-new Venom the likes of which no one has ever seen!',
          image: 'https://cdn.marvel.com/u/prod/marvel/i/mg/f/c0/67337040e13b2/clean.jpg',
          character: 'Venom',
          publisherid: 1
        }
      })
    })

});
  



