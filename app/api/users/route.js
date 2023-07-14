// export async function GET(request) {
//   return new Response("Hello, Next.js!");
// }

//GET
//POST
//PUT
//PATCH
//DELETE
//HEAD

// export async function HEAD(request: Request) {}
// export async function POST(request: Request) {}
// export async function PUT(request: Request) {}
// export async function PATCH(request: Request) {}
// export async function DELETE(request: Request) {}

// ========================================

//http://localhost:3000/api/users  // This would be the path for data fetching

export async function GET(request) {
  //
  users = [
    { id: 1, name: "samson" },
    { id: 2, name: "Sagar" },
  ];

  return new Response(JSON.stringify(users));
}
