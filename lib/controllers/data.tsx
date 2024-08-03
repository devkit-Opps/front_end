export default  async function Datastatic() {
    const res = await fetch('http://localhost:3300/yearbook/api', {next: {revalidate:60}});
    // console.log('fetching Users')
    // console.log(res.body)
    if(!res.ok) throw new Error('fialed to fetch resources');
    return res.json();
}

export async function Dataquery() {
    const res = await fetch('http://localhost:3300/yearbook/api', {next: {revalidate:60}});
    // console.log('fetching Users')
    // console.log(res.body)
    if(!res.ok) throw new Error('fialed to fetch resources');
    return res.json();
}