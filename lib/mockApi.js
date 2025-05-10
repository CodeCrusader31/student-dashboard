import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

let students = [
  { id: 1, name: "Alice Johnson", email: "alice.johnson@example.com", course: "B.Tech" },
  { id: 2, name: "Bob Smith", email: "bob.smith@example.com", course: "MBA" },
  { id: 3, name: "Carol Davis", email: "carol.davis@example.com", course: "BCA" },
  { id: 4, name: "David Lee", email: "david.lee@example.com", course: "BA" },
  { id: 5, name: "Eve Turner", email: "eve.turner@example.com", course: "MBBS" },
  { id: 6, name: "Frank Harris", email: "frank.harris@example.com", course: "LLB" },
  { id: 7, name: "Grace Walker", email: "grace.walker@example.com", course: "CA" },
  { id: 8, name: "Henry Hall", email: "henry.hall@example.com", course: "BSc" },
  { id: 9, name: "Isabella Young", email: "isabella.young@example.com", course: "MBA" },
  { id: 10, name: "Jack Allen", email: "jack.allen@example.com", course: "B.Tech" },
  { id: 11, name: "Kara Wright", email: "kara.wright@example.com", course: "LLB" },
  { id: 12, name: "Liam King", email: "liam.king@example.com", course: "BCA" },
  { id: 13, name: "Mia Scott", email: "mia.scott@example.com", course: "MBBS" },
  { id: 14, name: "Noah Adams", email: "noah.adams@example.com", course: "BA" },
  { id: 15, name: "Olivia Baker", email: "olivia.baker@example.com", course: "CA" },
  { id: 16, name: "Paul Carter", email: "paul.carter@example.com", course: "B.Tech" },
  { id: 17, name: "Quinn Perez", email: "quinn.perez@example.com", course: "MBA" },
  { id: 18, name: "Ruby Roberts", email: "ruby.roberts@example.com", course: "BSc" },
  { id: 19, name: "Sam Murphy", email: "sam.murphy@example.com", course: "LLB" },
  { id: 20, name: "Tina Rivera", email: "tina.rivera@example.com", course: "BCA" },
  { id: 21, name: "Uma Cox", email: "uma.cox@example.com", course: "BA" },
  { id: 22, name: "Victor Ward", email: "victor.ward@example.com", course: "MBBS" },
  { id: 23, name: "Wendy Gray", email: "wendy.gray@example.com", course: "BSc" },
  { id: 24, name: "Xander James", email: "xander.james@example.com", course: "CA" },
  { id: 25, name: "Yara Hughes", email: "yara.hughes@example.com", course: "B.Tech" },
  { id: 26, name: "Zane Flores", email: "zane.flores@example.com", course: "BCA" },
  { id: 27, name: "Abby Reed", email: "abby.reed@example.com", course: "MBA" },
  { id: 28, name: "Ben Simmons", email: "ben.simmons@example.com", course: "LLB" },
  { id: 29, name: "Chloe Long", email: "chloe.long@example.com", course: "BA" },
  { id: 30, name: "Dylan Foster", email: "dylan.foster@example.com", course: "CA" },
  { id: 31, name: "Ella Powell", email: "ella.powell@example.com", course: "BSc" },
  { id: 32, name: "Finn Howard", email: "finn.howard@example.com", course: "B.Tech" },
  { id: 33, name: "Gina Ward", email: "gina.ward@example.com", course: "MBA" },
  { id: 34, name: "Harry Bell", email: "harry.bell@example.com", course: "LLB" },
  { id: 35, name: "Ivy Cooper", email: "ivy.cooper@example.com", course: "BCA" },
  { id: 36, name: "Jake Patterson", email: "jake.patterson@example.com", course: "BSc" },
  { id: 37, name: "Kayla Bailey", email: "kayla.bailey@example.com", course: "CA" },
  { id: 38, name: "Leo Jenkins", email: "leo.jenkins@example.com", course: "BA" },
  { id: 39, name: "Megan Stone", email: "megan.stone@example.com", course: "B.Tech" },
  { id: 40, name: "Nate Willis", email: "nate.willis@example.com", course: "MBA" },
  { id: 41, name: "Opal Neal", email: "opal.neal@example.com", course: "LLB" },
  { id: 42, name: "Perry Welch", email: "perry.welch@example.com", course: "BSc" },
  { id: 43, name: "Queen Ellis", email: "queen.ellis@example.com", course: "MBBS" },
  { id: 44, name: "Ray Dean", email: "ray.dean@example.com", course: "BCA" },
  { id: 45, name: "Sophie Armstrong", email: "sophie.armstrong@example.com", course: "MBA" },
  { id: 46, name: "Ty Grant", email: "ty.grant@example.com", course: "BA" },
  { id: 47, name: "Ulyssa Reid", email: "ulyssa.reid@example.com", course: "LLB" },
  { id: 48, name: "Vince Black", email: "vince.black@example.com", course: "CA" },
  { id: 49, name: "Willie Knight", email: "willie.knight@example.com", course: "B.Tech" },
  { id: 50, name: "Zoey Fox", email: "zoey.fox@example.com", course: "BSc" }
];


export const mock = new MockAdapter(axios, { delayResponse: 1000 });

mock.onGet("/api/students").reply(200, students);

mock.onPost("/api/students").reply(config => {
  const newStudent = JSON.parse(config.data);
  students.push({ ...newStudent, id: students.length + 1 });
  return [201, newStudent];
});
