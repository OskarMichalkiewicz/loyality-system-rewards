import CustomersGrid from "./componenets/CustomersGrid";
import ErrorBoundary from "./componenets/ErrorBoundary";

function App() {
  return (
    <ErrorBoundary>
      <div className="h-screen bg-gray-900">
        <CustomersGrid />
      </div>
    </ErrorBoundary>
  );
}

export default App;
