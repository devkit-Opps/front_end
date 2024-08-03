


// Profile thumbNail Routes


export async function uploadProfileImage() {
    const res = await fetch('http://localhost:3300/yearbook/api', {next: {revalidate:60}});
    // console.log('fetching Users')
    // console.log(res.body)
    if(!res.ok) throw new Error('fialed to fetch resources');
    return res.json();
}
export async function getProfileImage() {
    const res = await fetch('http://localhost:3300/yearbook/api', {next: {revalidate:60}});
    // console.log('fetching Users')
    // console.log(res.body)
    if(!res.ok) throw new Error('fialed to fetch resources');
    return res.json();
}
export async function updateProfileImage() {
    const res = await fetch('http://localhost:3300/yearbook/api', {next: {revalidate:60}});
    // console.log('fetching Users')
    // console.log(res.body)
    if(!res.ok) throw new Error('fialed to fetch resources');
    return res.json();
}
export async function deleteProfileImage() {
    const res = await fetch('http://localhost:3300/yearbook/api', {next: {revalidate:60}});
    // console.log('fetching Users')
    // console.log(res.body)
    if(!res.ok) throw new Error('fialed to fetch resources');
    return res.json();
}



// user thumbnail Routes


export async function uploadUserImage() {
    const res = await fetch('http://localhost:3300/yearbook/api', {next: {revalidate:60}});
    // console.log('fetching Users')
    // console.log(res.body)
    if(!res.ok) throw new Error('fialed to fetch resources');
    return res.json();
}
export async function getUserImage() {
    const res = await fetch('http://localhost:3300/yearbook/api', {next: {revalidate:60}});
    // console.log('fetching Users')
    // console.log(res.body)
    if(!res.ok) throw new Error('fialed to fetch resources');
    return res.json();
}
export async function updateUserImage() {
    const res = await fetch('http://localhost:3300/yearbook/api', {next: {revalidate:60}});
    // console.log('fetching Users')
    // console.log(res.body)
    if(!res.ok) throw new Error('fialed to fetch resources');
    return res.json();
}
export async function deleteUserImage() {
    const res = await fetch('http://localhost:3300/yearbook/api', {next: {revalidate:60}});
    // console.log('fetching Users')
    // console.log(res.body)
    if(!res.ok) throw new Error('fialed to fetch resources');
    return res.json();
}