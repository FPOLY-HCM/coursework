import Bool "mo:base/Bool";
import Int "mo:base/Blob";
import Nat16 "mo:base/Nat16";
import Nat32 "mo:base/Nat32";
import Option "mo:base/Option";
import Text "mo:base/Text";
import Trie "mo:base/Trie";

actor {
  /**
   * Customer Type
  */
  public type Customer = {
    name: Text;
    birthday: Text;
    phone: Text;
    sex: Nat16;
  };

  /**
   * Customer ID Type
  */
  public type CustomerId = Nat32;

  private stable var nextId : CustomerId = 0;
  private stable var customers : Trie.Trie<CustomerId, Customer> = Trie.empty();


  /**
   ** Read customer
  */
  public func read(id : CustomerId) : async ?Customer {
    return Trie.find(customers, key(id), Nat32.equal);
  };

  /**
   ** Create customer
  */
  public func create(customer : Customer) : async CustomerId {
    let customer_id = nextId;
    nextId += 1;
    customers := Trie.replace(customers, key(customer_id), Nat32.equal, ?customer).0;
    return customer_id;
  };

  /**
   ** Update customer
  */
  public func update(id :CustomerId, customer : Customer) : async Bool {
    let result = Trie.find(customers, key(id), Nat32.equal);
    let exists = Option.isSome(result);
    if (exists) {
      customers := Trie.replace(customers, key(id), Nat32.equal, ?customer).0;
      return true;
    };

    return false;
  };

  /**
   ** Delete customer
  */
  public func delete(id : CustomerId) : async Bool {
    let result = Trie.find(customers, key(id), Nat32.equal);
    let exists = Option.isSome(result);
    if (exists) {
      customers := Trie.remove(customers, key(id), Nat32.equal).0;
      return true;
    };

    return false;
  };

  private func key(x : CustomerId) : Trie.Key<CustomerId> {
    return { hash = x; key = x };
  };};
