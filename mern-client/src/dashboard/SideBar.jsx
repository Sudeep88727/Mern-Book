import { Sidebar } from 'flowbite-react';
import React, { useContext } from 'react';
import { BiBuoy } from 'react-icons/bi';
import { HiArrowSmRight, HiChartPie, HiInbox, HiOutlineCloudUpload, HiTable, HiViewBoards } from 'react-icons/hi';
import { AuthContext } from '../contects/AuthProvider';
const SideBar = () => {
    const { user } = useContext(AuthContext);
    return (
        <div><Sidebar aria-label="Sidebar with content separator example">
            <Sidebar.Logo href="#" img={user?.photoURL} className='h-16 w-16'>
                <p>
                    {
                        user?.displayName || "demo user"
                    }
                </p>
            </Sidebar.Logo>
            <Sidebar.Items>
                <Sidebar.ItemGroup>
                    <Sidebar.Item href="/admin/dashboard" icon={HiChartPie}>
                        Dashboard
                    </Sidebar.Item>
                    <Sidebar.Item href="/admin/dashboard/upload" icon={HiOutlineCloudUpload}>
                        Upload Books
                    </Sidebar.Item>
                    <Sidebar.Item href="/admin/dashboard/manage" icon={HiInbox}>
                        Manage Books
                    </Sidebar.Item>
                    <Sidebar.Item href="/login" icon={HiArrowSmRight}>
                        Login
                    </Sidebar.Item>
                    <Sidebar.Item href="/logout" icon={HiTable}>
                        Logout
                    </Sidebar.Item>
                </Sidebar.ItemGroup>
                <Sidebar.ItemGroup>
                    <Sidebar.Item href="/" icon={HiChartPie}>
                        Home
                    </Sidebar.Item>
                    <Sidebar.Item href="#" icon={HiViewBoards}>
                        Documentation
                    </Sidebar.Item>
                    <Sidebar.Item href="#" icon={BiBuoy}>
                        Help
                    </Sidebar.Item>
                </Sidebar.ItemGroup>
            </Sidebar.Items>
        </Sidebar></div>
    )
}

export default SideBar