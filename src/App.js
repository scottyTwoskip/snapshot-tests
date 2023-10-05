import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import GitHubCard from './GitHubCard';

function App() {
  return (
    <div className="App">
      <GitHubCard
        userPhoto="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6d257453-e35e-4846-9f98-ffb5a54aeb09/d7ryrbf-99c341a2-54d0-4a50-b3a4-54bd885b6aa6.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzZkMjU3NDUzLWUzNWUtNDg0Ni05Zjk4LWZmYjVhNTRhZWIwOVwvZDdyeXJiZi05OWMzNDFhMi01NGQwLTRhNTAtYjNhNC01NGJkODg1YjZhYTYuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.KxKTlvqFCjENyTk6FsjGSi9RHDbhaIchSKMG7k_vNVg"
        username="BatMan"
        description="I fight crime and code way too much."
      />
    </div>
  );
}

export default App;
