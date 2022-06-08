import { Tabs } from 'antd';
import clsx from 'clsx';
import { MdMoreHoriz } from 'react-icons/md';
import { UsePlaylist } from '../../hooks';
import PlayListRight from '../play-list-siderbar-right/playlist-right';
import WaitingList from '../waitinglist/waiting-list';
import './sidebar-right.scss';
const { TabPane } = Tabs;

const SidebarRight = () => {
  const { resultPlaylist, handleToggle } = UsePlaylist();
  const { isOpen } = resultPlaylist;

  return (
    <>
      <div className="wrapper-sidebar-right">
        <div
          className={clsx('modal-overlay', !isOpen && 'hidden')}
          onClick={() => handleToggle(false)}
        ></div>
        <div className={clsx('sidebar-right', isOpen && 'active')}>
          <Tabs
            defaultActiveKey="1"
            style={{ height: '100%' }}
            tabBarStyle={{ margin: '0px 16px' }}
            moreIcon={<MdMoreHoriz className="text-white " size="1.5em" />}
          >
            <TabPane
              style={{ height: '100%', padding: '20px' }}
              tab={<h5 className="text-white mb-0">Danh sách phát</h5>}
              key="1"
            >
              <WaitingList />
            </TabPane>
            <TabPane
              style={{ height: '100%', padding: '20px' }}
              tab={<h5 className="text-white mb-0">Danh sách phát playList</h5>}
              key="3"
            >
              <PlayListRight />
            </TabPane>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default SidebarRight;
