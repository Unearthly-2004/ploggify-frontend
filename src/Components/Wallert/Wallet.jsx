import React, { useState } from 'react';
import './Wallet.css';

function Wallet() {
  const [isConnected, setIsConnected] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    walletAddress: '',
  });
  const [availableTokens, setAvailableTokens] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const [walletInput, setWalletInput] = useState('');
  const [isEditMode, setIsEditMode] = useState(false);

  const handleConnectWallet = () => {
    setShowForm(true);
    setIsEditMode(false);
  };

  const handleEditWallet = () => {
    setShowForm(true);
    setWalletInput(userInfo.walletAddress);
    setIsEditMode(true);
  };

  const handleSaveWalletInfo = () => {
    setUserInfo({
      ...userInfo,
      walletAddress: walletInput,
    });
    setAvailableTokens(100);
    setIsConnected(true);
    setShowForm(false);
    alert(isEditMode ? 'Wallet Info Updated Successfully' : 'Wallet Connected Successfully');
  };

  const handleInputChange = (e) => {
    setWalletInput(e.target.value);
  };

  return (
    <div className="wallet-container">
      {/* User Info Container */}
      <div className="user-info">
        <h2>User Info</h2>
        <p><strong>Name:</strong> {userInfo.name}</p>
        <p><strong>Email:</strong> {userInfo.email}</p>
        <p><strong>Wallet Address:</strong> {isConnected ? userInfo.walletAddress : 'Not connected'}</p>
        {isConnected && (
          <button onClick={handleEditWallet}>Edit Wallet Info</button>
        )}
      </div>

      {/* Token Info Container */}
      <div className="token-info">
        <h2>Wallet Info</h2>
        <p><strong>Available Tokens:</strong> {isConnected ? availableTokens : 'Not connected'}</p>
        {!isConnected && (
          <button onClick={handleConnectWallet}>Connect to Wallet</button>
        )}
      </div>

      {/* Popup Form */}
      {showForm && (
        <div className="popup-form">
          <div className="form-container">
            <h2>{isEditMode ? 'Edit Wallet Info' : 'Enter Wallet Info'}</h2>
            <label>
              Wallet Address:
              <input
                type="text"
                value={walletInput}
                onChange={handleInputChange}
                placeholder="Enter your wallet address"
              />
            </label>
            <button onClick={handleSaveWalletInfo}>{isEditMode ? 'Update' : 'Save'}</button>
            <button onClick={() => setShowForm(false)}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Wallet;
