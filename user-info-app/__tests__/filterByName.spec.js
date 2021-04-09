describe("Filter By names",()=>{

   test('should return names starting with (A)', () => {
       const names=[
        { name: "Aarvi", age:7},
        { name: "Pooja", age:27},
        { name: "kiya", age:45}

       ];
     
       const output={ name: "Aarvi", age:7};
       expect(filterByName(names,"A")).toEqual(output);

       
   });

})