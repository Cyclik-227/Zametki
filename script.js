const list = document.getElementById('notes-list');
let notes = JSON.parse(localStorage.getItem('z') || '[]');

function render() {
    list.innerHTML = notes.map((n, i) => `
    <details>
        <summary>${n.title}</summary>
        <textarea placeholder="Текст заметки…" oninput="notes[${i}].body=this.value;save()">${n.body}</textarea>
    </details>
    `).join('');
}

function addNote(e) {
    e.preventDefault();
    const t = document.getElementById('input-title').value.trim();
    if (!t) return;
    notes.push({ title: t, body: '' });
    save();
    render();
    document.getElementById('input-title').value = '';
}
function save() { localStorage.setItem('z', JSON.stringify(notes)); }

render();