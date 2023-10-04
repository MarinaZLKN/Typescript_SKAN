import React from 'react';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import axios from "axios";
import Logo from './Logo';
import {Link} from "react-router-dom";
import LogoutButton from "./LogoutButton";
import '../../styles/Header.scss';
import {AuthState} from "../../reducers/reduser";
import {SearchDataState} from "../../reducers/searchReducer";
// import { RootState} from "../../types";

interface AccountInfo {
  eventFiltersInfo: {
    usedCompanyCount: number,
    companyLimit: number
  };
}

export interface RootState {
  auth: AuthState;
  searchData: SearchDataState;
}

const Header: React.FC = () => {
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
  const token = useSelector((state: RootState) => state.auth.token);
  const [accountInfo, setAccountInfo] = useState<AccountInfo | null>(null);

  useEffect(() => {
    if (isAuthenticated && token) {
      axios.get("https://gateway.scan-interfax.ru/api/v1/account/info", {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
        },
      }).then(response => {
        setAccountInfo(response.data);
      }).catch(error => {
        console.error(error);
      });
    }
  }, [isAuthenticated, token]);


    return (
        <div className="header">
           <div className="logo">
               <Logo  alt="Company Logo" />
           </div>
            <div className="header_menu">
                <Link to="/" className="menu">
                    <label className="menu"> Main page </label>
                </Link>
                <label className="menu"> Tariff </label>
                <label className="menu"> FAQ </label>
            </div>
            {isAuthenticated ? (
                <div className="side-menu-auth">
                    {accountInfo && (
                        <div className="tariff-info-auth">
                            <p className="tariff-used-number"><span className="tariff-used">Company used</span><span className="tariff-number">{accountInfo.eventFiltersInfo.usedCompanyCount}</span></p>
                            <p className="tariff-limit-number"><span className="tariff-limit">Company limit</span> <span className="tariff-number">{accountInfo.eventFiltersInfo.companyLimit}</span> </p>
                        </div>
                    )}

                    <div className="account-info">
                      <div className="text-container">
                        <p className="account-name">Alex А.</p>
                        <div className="logout-btn">
                          <LogoutButton />
                        </div>
                      </div>
                      <div className="account-pic">
                        <img src="/account-pic.png" className="acc-pic" />
                      </div>
                    </div>
                </div>
            ) : (
            <div className="header_side-menu">
                <label className="signup">Sign up</label>
                    <div className="separator"></div>
                <Link to="/auth">
                    <button className="header-btn">Sign in</button>
                </Link>
            </div>
                )}
        </div>
    );
}


export default Header;