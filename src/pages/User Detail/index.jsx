import { useParams } from "react-router-dom";
import UseDetailUsers from "../../hooks/UseDetailUsers";
import Layout from "../../components/Layout";
import BreadcrumbsDefault from "../../components/Breadcrumb";

const UserDetailPage = () => {
  const { id } = useParams();
  const { users, getDetailUsers } = UseDetailUsers(id);

  return (
    <Layout>
      <section>
        <div className="container flex flex-col items-center justify-center gap-8 mx-auto">
          <div className="w-full">
            <p className="text-3xl font-bold text-[#f96d00] border-b-2 pb-2 border-[#f2f2f2]">
              User Detail
            </p>

            <BreadcrumbsDefault />
          </div>

          <div className="flex md:flex-row flex-col items-center justify-center gap-8 p-8 border-2 border-[#f2f2f2] rounded-lg  bg-[#222831]">
            <div className="size-64">
              <img
                src={users.avatar}
                alt="Image"
                className="rounded-lg size-full border-2 border-[#f2f2f2]"
              />
            </div>

            <div className="w-64 font-bold leading-loose uppercase">
              <p>ID : {users.id}</p>
              <p>First Name : {users.first_name}</p>
              <p>Last Name : {users.last_name}</p>
              <p>
                Email :<br />
                {users.email}
              </p>
              <p></p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default UserDetailPage;
