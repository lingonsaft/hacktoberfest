import javax.servlet.http.*;
import javax.servlet.*;
import java.io.*;
import java.sql.*;
import javax.servlet.ServletException;
import javax.servlet.http.*;

public class login1 extends HttpServlet
{
   public void doPost(HttpServletRequest req,HttpServletResponse res)throws IOException,ServletException
{
    res.setContentType("text/html");
    String u=req.getParameter("user");
    String p=req.getParameter("pwd");
    try
  {
      Class.forName("com.mysql.jdbc.Driver");
      Connection con=DriverManager.getConnection("jdbc:mysql://localhost:3306/student","root","");
      String sql="select Username from register where Username=?";
      
     PreparedStatement stmt=con.prepareStatement(sql);
     stmt.setString(1,u);
     
PrintWriter out=res.getWriter();
 ResultSet rs=stmt.executeQuery();
   if(rs.next()){
    if ((rs.getString(1).equals(u)))
        out.println("welcome"+"  "+u);
    
      }
   else{
       out.println("<h1>You are not an authenticated user</h1>");

   }
}
  catch(Exception e2) {
PrintWriter out1=res.getWriter();
out1.println(e2);
}
    }
  }

