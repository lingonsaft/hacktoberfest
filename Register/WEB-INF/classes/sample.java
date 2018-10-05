import java.sql.*;
class sample
{
   public static void main(String args[])
  {
     try
  {
     Class.forName("com.mysql.jdbc.Driver");
     Connection con=DriverManager.getConnection("jdbc:mysql://localhost:3306/student","root","");
     Statement st=con.createStatement();
    ResultSet rs=st.executeQuery("select * from register");
   rs.next();
   System.out.println(rs.getString(1)+"  "+rs.getString(2)+"  "+rs.getString(3)+"  "+rs.getString(4));
}
catch(Exception e)
{
   System.out.println(e);
  }
 }
}