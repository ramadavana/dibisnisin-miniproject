import axios from "axios";
import { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import BreadcrumbsDefault from "../../components/Breadcrumb";

export default function UserListPage() {
  const [users, setUsers] = useState([]);

  const [pagination, setPagination] = useState({
    page: 1,
    per_page: 4,
    total: null,
    prevPage: null,
    nextPage: null,
  });

  const getUserList = () => {
    axios
      .get(`https://reqres.in/api/users?page=${pagination.page}&per_page=${pagination.per_page}`)
      .then((res) => {
        setUsers(res.data.data);
        setPagination({
          page: res.data.page,
          per_page: res.data.per_page,
          total: res.data.total,
          total_pages: res.data.total_pages,
          prevPage: res.data.prevPage,
          nextPage: res.data.nextPage,
        });
        console.log("User List", res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getUserList();
  }, [pagination?.page]);

  console.log("Pagination", pagination);

  const handlePrevPage = () => {
    setPagination({
      ...pagination,
      page: pagination.page - 1,
    });
  };

  const handleNextPage = () => {
    setPagination({
      ...pagination,
      page: pagination.page + 1,
    });
  };

  return (
    <Layout>
      <section>
        <div className="container flex flex-col items-center justify-center gap-8 mx-auto">
          <div className="w-full">
            <p className="text-3xl font-bold text-[#f96d00] border-b-2 pb-2 border-[#f2f2f2]">
              User List
            </p>

            <BreadcrumbsDefault />
          </div>

          <div className="lg:container lg:mx-auto lg:p-4 lg:py-8 lg:px-24 grid grid-cols-2 md:grid-cols-4 gap-4 border-2 border-transparent rounded-lg lg:border-[#222831] lg:bg-[#222831]">
            {users.map((user) => (
              <div
                key={user.id}
                className="flex flex-col items-center justify-between w-full h-[270px] border-2 border-[#f2f2f2] rounded-lg p-4 bg-[#222831] hover:scale-110 transition-all duration-300 font-bold">
                <img
                  src={user.avatar}
                  alt="User Image"
                  className="rounded-full border-2 border-[#f2f2f2] object-cover w-32 h-32"
                />

                <p className="text-center">
                  {user.first_name} {user.last_name}
                </p>

                <a href={`/user-list/user-detail/${user.id}`}>
                  <button className="px-2 py-1 border-2 border-[#f2f2f2] bg-[#f2f2f2] text-[#222831] uppercase rounded-lg hover:bg-[#f96d00] hover:text-[#f2f2f2] transition-all duration-300">
                    User Detail
                  </button>
                </a>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-4">
            <button
              className="px-2 py-1 rounded-lg bg-[#F2f2f2] text-[#222831] uppercase font-bold border-2 border-[#f2f2f2] hover:bg-[#222831] hover:text-[#f2f2f2] transition-all duration-300 text-sm"
              onClick={handlePrevPage}
              disabled={pagination.page === 1}>
              Prev
            </button>

            <p className="flex items-center justify-center font-bold text-center">
              {pagination.page} / {pagination.total_pages}
            </p>

            <button
              className="px-2 py-1 rounded-lg bg-[#F2f2f2] text-[#222831] uppercase font-bold border-2 border-[#f2f2f2] hover:bg-[#222831] hover:text-[#f2f2f2] transition-all duration-300 text-sm"
              onClick={handleNextPage}
              disabled={pagination.page === pagination.total_pages}>
              Next
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
