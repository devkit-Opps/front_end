export async function getUserProfile() {
    const res = await fetch('http://localhost:3300/yearbook/api', {next: {revalidate:60}});
    // console.log('fetching Users')
    // console.log(res.body)
    if(!res.ok) throw new Error('fialed to fetch resources');
    return res.json();
}
export async function getSingleProfile() {
    const res = await fetch('http://localhost:3300/yearbook/api', {next: {revalidate:60}});
    // console.log('fetching Users')
    // console.log(res.body)
    if(!res.ok) throw new Error('fialed to fetch resources');
    return res.json();
}
export async function postUserProfile() {
    const res = await fetch('http://localhost:3300/yearbook/api', {next: {revalidate:60}});
    // console.log('fetching Users')
    // console.log(res.body)
    if(!res.ok) throw new Error('fialed to fetch resources');
    return res.json();
}
export async function updateUserProfile() {
    const res = await fetch('http://localhost:3300/yearbook/api', {next: {revalidate:60}});
    // console.log('fetching Users')
    // console.log(res.body)
    if(!res.ok) throw new Error('fialed to fetch resources');
    return res.json();
}
export async function deleteSingleProfile() {
    const res = await fetch('http://localhost:3300/yearbook/api', {next: {revalidate:60}});
    // console.log('fetching Users')
    // console.log(res.body)
    if(!res.ok) throw new Error('fialed to fetch resources');
    return res.json();
}

